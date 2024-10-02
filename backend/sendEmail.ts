import emailjs from 'emailjs-com';

export const sendEmail = (formData) => {
    const templateParams = {
      name: formData.name,
      email: formData.email,
      user_message: formData.message,
      service: formData.service,
      subject: `New message from ${formData.name} regarding ${formData.service}`,
    };
  
    return emailjs.send('service_fbzdxec', 'template_ig9z1p8', templateParams, 'fTnQk8TZAaFn508ci')
      .then((response) => {
        console.log('Email sent successfully!');
        console.log('SUCCESS!', response.status, response.text);
        return true;
      }, (error) => {
        console.log('Error sending email:', error);
        console.log('FAILED...', error);
        return false;
      });
  }