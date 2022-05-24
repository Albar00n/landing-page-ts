import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useRouter } from "next/router";
// import emailjs from "@emailjs/browser";
import Head from "next/head";
import Logo from "../logo/index"
import {
  Grid,
  TextField,
  Card,
  Typography,
  CardContent,
  Button,
} from "@material-ui/core";
import Footer from "./Footer";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  get: {
    border: "1.5px solid #E3E3E3",
    background: "#FBFBFB",
    borderRadius: "22px",
    fontSize: "19px",
    lineHeight: "31px",
    color: "#58696D",
    fontFamily: "Poppins",
  },
}));

export default function ContactForm() {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [message, setMessage] = useState("");


const handleSubmit = async (e) => {
  e.preventDefault();
  await fetch("/api/mail", {
    body: JSON.stringify({
      email: email,
      name: name,
      phone: phone,
      // subject: subject,
      message: message,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  }).then((res) => {
    if (res.status === 200) {
      // alert("Your Message has been recieved");
      setName("")
      setEmail("")
      setPhone("")
      setMessage("")
    }
  });
};

  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Let's get in touch" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid item>
        <Grid>
          <>
            <Grid container direction="column" alignItems="center">
              <Grid>
                <Card style={{ maxWidth: 700 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      Contact Us
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="div"
                      gutterBottom
                    >
                      Fill up the form and our team will get back to you within
                      24 hours.
                    </Typography>
                    <form method="post" onSubmit={handleSubmit}>
                      <Grid container spacing={1}>
                        <Grid xs={12} item>
                          <TextField
                            type="text"
                            name="fullName"
                            value={name}
                            placeholder="Enter first name"
                            label="FullName"
                            variant="outlined"
                            fullWidth
                            required

                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            name="email"
                            type="email"
                            value={email}
                            placeholder="Enter email"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            required

                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            name="phone"
                            type="text"
                            value={phone}
                            placeholder="Enter phone number"
                            label="Phone"
                            variant="outlined"
                            fullWidth
                            required
                            onChange={(e) => {
                              setPhone(e.target.value);
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            name="message"
                            label="message"
                            value={message}
                            type="text"
                            multiline
                            rows={4}
                            placeholder="Type your message here"
                            variant="outlined"
                            fullWidth
                            required
                            onChange={(e) => {
                              setMessage(e.target.value);
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            type="submit"
                            value="send"
                            className={classes.get}
                            fullWidth
                          >
                            Send
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Footer />
          </>
        </Grid>
      </Grid>
    </div>
  );
}
