import { Container, Typography ,Box} from '@mui/material'
import React from 'react'
import Navbar from '../layouts/Navbar'

function FAQ() {
  return (
    <>
<Navbar/>
<Container maxWidth='xl'>
    <Box padding={5} border={2} borderColor={'dark'} borderRadius={3} boxShadow={5}>


    <Typography variant='h4' sx={{textDecoration:'underline'}} color='dark' textAlign='Center' marginTop={5}>Frequently Asked Questions</Typography>


        <Typography variant='h5' sx={{textDecoration:'underline'}} color='primary'marginTop={5}>Question1:How to Setup My  New Macbook pro?</Typography>
        <Typography variant='h6'color='dark'>Answer:The first time your MacBook Pro starts up, Setup Assistant walks you through the simple steps needed to start using your new Mac. You can respond to all the prompts, or skip some steps and choose to complete them later. For example, it might make sense to set up Screen Time—which you can set for different users—after initial setup.
        </Typography>

        <Typography variant='h5'  sx={{textDecoration:'underline'}} color='primary'marginBottom={5}>Question2:How do I get the manual for iPhone?</Typography>
        <Typography variant='h6'color='dark' >Answer:How do I get the manual for iPhone?
You can view the iPhone User Guide in the Safari app , or download it to the Books app so you can read it even when you're offline.
...
Download the user guide from Apple Books
Open the Books app .
Tap Search, tap the search field, then enter “iPhone User Guide.”
Tap Get, then wait for the book to download.</Typography>

        <Typography variant='h5' sx={{textDecoration:'underline'}} color='primary'marginBottom={5}>Question3:Can you connect Beats to a non Apple device?</Typography>
        <Typography variant='h6'color='dark'>Answer:Make sure that you turned on Bluetooth on your Mac, Android device, or other device. Place the Powerbeats Pro earbuds in the case. Leave the case lid open. Press and hold the system button until the LED blinks.</Typography>

        <Typography variant='h5' sx={{textDecoration:'underline'}} color='primary'marginBottom={5}>Question4:How to track  my order from Daraz?</Typography>
        <Typography variant='h6'color='dark'>Answer:To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</Typography>

        <Typography variant='h5' sx={{textDecoration:'underline'}} color='primary'marginBottom={5}>Question5:</Typography>
        <Typography variant='h6'color='dark'>Answer:</Typography>

        <Typography variant='h5' sx={{textDecoration:'underline'}} color='primary'marginBottom={5}>Question6:</Typography>
        <Typography variant='h6'color='dark'>Answer:</Typography>
    </Box>
    
</Container >

    </>
  )
}

export default FAQ

