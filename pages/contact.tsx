import { Button, Grid, TextField, Typography } from '@mui/material'
import { NextPage } from 'next'
import React from 'react'
import { makeStyles } from 'tss-react/mui'
import { SubmitHandler, useForm } from "react-hook-form";
import { Colors } from '../constants/Colors'
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import sgMail from "@sendgrid/mail"


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

const submit: SubmitHandler<EmailData> = async (data: EmailData) => {
  console.log(data);
  // sendEmail(data);
  try {
    const response = await fetch('/api/send-mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
    console.log(result);
  } catch (error) {
    console.log(error)
  } 
};

// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const sendEmail = async (data: EmailData) => {
//   const { email, subject, message } = data;
//   const msg = {
//     to: 'ion.georgiana@hotmail.com',
//     from: email,
//     subject: subject,
//     text: message,
//   };
//   try {
//     await sgMail.send(msg).then(() => {
//       console.log('Email sent');});
//   } catch (error) {
//     console.error(error);
//   }
// };

  return (
    <Grid container className={classes.contactPage}>
      
      <Grid item container xs={12} sm={12} md={6} lg={6} className={classes.callForAction}>
        <Grid item>
          <Typography variant="h1" className={classes.title}>Let's join forces</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" className={classes.text}>Please feel free to reach out to me if you have any feedback on my work or are interested in collaborating.</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" className={classes.text}>I look forward to hearing from you.</Typography>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6} className={classes.contactFormContainer}>
        <form onSubmit={handleSubmit(submit)} className={classes.form}>
          <Grid item>
            <Typography variant="h5" className={classes.formText}>Your Email</Typography>
            <TextField 
              className={classes.textField} 
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
          <Grid item>
            <Typography variant="h5" className={classes.formText}>Subject</Typography>
            <TextField 
              className={classes.textField} 
              {...register("subject", { required: 'Subject is required' })}
              />
              {errors.subject && (
                <Typography variant="h6" style={{ color: Colors.red }}>
                  {errors.subject.message}
                </Typography>
              )}
          </Grid>
          <Grid item>
            <Typography variant="h5" className={classes.formText}>Message</Typography>
            <TextField 
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

          <Grid item>
            <Button type="submit" variant="contained" startIcon={<SendRoundedIcon />} className={classes.button}>Send</Button>
          </Grid>
        </form>
        </Grid>

    </Grid>
  )
}

const useStyles = makeStyles()(() => ({
  contactPage:{

  },
  callForAction:{
    padding: '3rem 4.3rem'
  },
  form:{},
  contactFormContainer:{
    padding: '1.9rem 3.4rem'
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
   }
  }
}));

export default Contact