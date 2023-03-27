import * as React from 'react';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Privacypolicy() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <p style={{cursor:"pointer"}} onClick={handleClickOpen('paper')}>Privacy Policy</p>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Privacy Policy</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            At Haawks, we are committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, and disclose information about you when you access our website or use our services.

<br/>Information we collect: We may collect personal information such as your name, email address, and phone number when you sign up for our services. We may also collect non-personal information such as your IP address, browser type, and operating system.

<br/>How we use information: We use your information to provide you with our services, communicate with you, and improve our website and services. We may also use your information for marketing purposes, but you can opt-out of receiving such communications at any time.

<br/>Disclosure of information: We may share yo ur information with third-party service providers who assist us in providing our services. We may also disclose your information if required by law or to protect our legal rights.

<br/>Security: We take reasonable measures to protect your information from unauthorized access, disclosure, or misuse. However, no security system is impenetrable, and we cannot guarantee the security of your information.

<br/>Changes to this Privacy Policy: We may update this Privacy Policy from time to time. The updated policy will be posted on our website, and we will notify you of any significant changes.

<br/>Contact us: If you have any questions or concerns about this Privacy Policy

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}