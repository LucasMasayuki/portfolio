import { SendOutlined } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import { Formik, FormikHelpers, FormikValues } from 'formik';
import React from 'react';
import yup from 'utils/yup-extended';
import PhotoAvatar from '../../base/photo-avatar';

const validationSchema = yup.object().shape({
  message: yup.string().required('Fill the message'),
  subject: yup.string().required('Fill the subject'),
  email: yup.string().required('Email is required').email('Email is invalid'),
});

const ContactSection: React.FC = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
        subject: '',
        message: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values: FormikValues, helper: FormikHelpers<any>): void => {
        const myEmail = 'lutamaribuchi@gmail.com';

        helper.setSubmitting(false);
        window.open(
          `mailto:${myEmail}?subject=${values.subject}&body=${values.message}`
        );
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <Grid
            container
            sx={{ height: '100%', width: '100%' }}
            id="contact-section"
            position="relative"
          >
            <Grid item xs={12}>
              <Typography variant="h2" fontWeight="bold">
                Contact me
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                would you like to contact me? send an email
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              display="inline-grid"
              alignSelf="center"
              justifyContent="center"
            >
              <PhotoAvatar
                name="Lucas"
                height={{
                  xs: 128,
                  md: 164,
                }}
                width={{
                  xs: 128,
                  md: 164,
                }}
                picture="lucas.jpeg"
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Card>
                <CardContent>
                  <Grid container>
                    <Grid item xs={12} md={6}>
                      <TextField
                        required
                        variant="outlined"
                        id="email"
                        placeholder="E-mail"
                        label="Email"
                        value={values.email}
                        onChange={handleChange}
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        variant="outlined"
                        id="name"
                        placeholder="Name"
                        label="Name"
                        value={values.name}
                        onChange={handleChange}
                        error={touched.name && Boolean(errors.name)}
                        helperText={touched.name && errors.name}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        id="subject"
                        placeholder="Subject"
                        label="Subject"
                        value={values.subject}
                        onChange={handleChange}
                        error={touched.subject && Boolean(errors.subject)}
                        helperText={touched.subject && errors.subject}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        multiline
                        rows={8}
                        variant="outlined"
                        id="message"
                        placeholder="Hey there"
                        label="Message"
                        value={values.message}
                        onChange={handleChange}
                        error={touched.message && Boolean(errors.message)}
                        helperText={touched.message && errors.message}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={0} md={8} />
                    <Grid item xs={12} md={4}>
                      <LoadingButton
                        variant="contained"
                        loading={isSubmitting}
                        type="submit"
                        disabled={
                          isSubmitting ||
                          values.email == '' ||
                          values.message == ''
                        }
                        startIcon={<SendOutlined />}
                        fullWidth
                      >
                        Submit
                      </LoadingButton>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default ContactSection;
