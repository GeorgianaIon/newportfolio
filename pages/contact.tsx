import { Button, Grid, TextField, Typography } from '@mui/material'
import { NextPage } from 'next'
import React from 'react'
import { makeStyles } from 'tss-react/mui'
import { SubmitHandler, useForm } from "react-hook-form";
import { Colors } from '../constants/Colors'
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import emailjs from 'emailjs-com';
import theme from '../src/theme';


interface EmailData {
  email: string;
  subject: string;
  message: string;
}

const Contact: NextPage = () => {
const { classes } = useStyles();
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<EmailData>({
  mode: "onChange",
});

const submit: SubmitHandler<EmailData> = async (data: EmailData, event) => {
  emailjs.send(process.env.MY_SERVICE_ID || '', 
  process.env.MY_TEMPLATE_ID || '', 
  {...data}, 
  process.env.MY_USER_ID || '')
  .then((result) => {
      console.log(result) 
  }, (error) => {
      console.log(error.text);
  });

};

  return (
    <Grid container className={classes.contactPage}>
      
      <Grid item container xs={12} sm={12} md={12} lg={6} className={classes.callForAction}>
        <div>
            <Typography variant="h1" className={classes.title}>Let's join forces</Typography>
            <Typography variant="h5" className={classes.text}>Please feel free to reach out to me if you have any feedback on my work or are interested in collaborating.</Typography>
            <Typography variant="h5" className={classes.text}>I look forward to hearing from you.</Typography>
        </div>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={6} className={classes.contactFormContainer}>
        <form onSubmit={handleSubmit(submit)} className={classes.form}>
          <Grid item className={classes.fieldContainer}>
            <Typography variant="h5" className={classes.formText}>Your Email</Typography>
            <TextField 
              className={classes.textField + ' ' + classes.textFieldHeight} 
              InputProps={{
                classes: {
                  input: classes.resize,
                },
              }}
              {...register("email", { 
                required: 'Email is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format"
                }
              })}
              type="email"
              />
              {errors.email && (
                <Typography variant="h6" style={{ color: Colors.red }}>
                  {errors.email.message}
                </Typography>
              )}
          </Grid>
          <Grid item className={classes.fieldContainer}>
            <Typography variant="h5" className={classes.formText}>Subject</Typography>
            <TextField 
              InputProps={{
                classes: {
                  input: classes.resize,
                },
              }}
              className={classes.textField + ' ' + classes.textFieldHeight} 
              {...register("subject", { required: 'Subject is required' })}
              />
              {errors.subject && (
                <Typography variant="h6" style={{ color: Colors.red }}>
                  {errors.subject.message}
                </Typography>
              )}
          </Grid>
          <Grid item className={classes.fieldContainer}>
            <Typography variant="h5" className={classes.formText}>Message</Typography>
            <TextField 
              InputProps={{
                classes: {
                  input: classes.resize,
                },
              }}
              multiline
              rows={6}
              className={classes.textField} 
              {...register("message", { required: 'The message is required' })}
              />
              {errors.message && (
                <Typography variant="h6" style={{ color: Colors.red }}>
                  {errors.message.message}
                </Typography>
              )}
          </Grid>

          <Grid item style={{margin: 'auto 0'}}>
            <Button type="submit" variant="contained" startIcon={<SendRoundedIcon />} className={classes.button}>Send</Button>
          </Grid>
        </form>
        </Grid>

    </Grid>
  )
}

const useStyles = makeStyles()(() => ({
  contactPage:{
    height: '100%'
  },
  callForAction:{
    padding: '3rem 4.3rem',
    '@media (min-height: 1166px) and (min-width: 1200px)': {
    height: '84vh'
    },
    [theme.breakpoints.down('mobileScreen')]: {
      padding: '3rem 1rem',
    }
  },
  form:{

  },
  contactFormContainer:{
    padding: '1.9rem 3.4rem',
    [theme.breakpoints.down('mobileScreen')]: {
      padding: '1.9rem 1rem',
    }
  },
  input:{},
  textarea:{},
  button:{
    marginTop: '2rem',
  },
  title:{
    fontWeight: 100,
    fontStyle: 'italic',
  },
  text:{
    margin: '5% 0',
    maxWidth: '70%',
    lineHeight: 1.6,
    [theme.breakpoints.down('smallerScreen')]: {
      maxWidth: '100%',
    }
  },
  formText: {
    margin: '1rem 0',
  }, 
  textField: {
    width: '100%',
    borderRadius: '1rem',
    backgroundColor: Colors.white,
    '.MuiOutlinedInput-notchedOutline': {
      border: 'none',
   },
  },
  resize: {
     fontSize: '2.5vh'
  },
  textFieldHeight: {
    // height: '7vh',
  },
  fieldContainer: {
    '@media (min-height: 1000px)': {
      margin: '5% 0'
    }
  }
}));

export default Contact