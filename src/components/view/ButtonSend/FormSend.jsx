import React, {useEffect, useState} from 'react';

import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const FormSend = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [error, setError] = useState('The field must have at min 2 symbols');
    const [showErr, setShowErr] = useState("hide")

    const [errEmail, setErrEmail] = useState('You must write correct email. Example: test@test.com')
    const [showErrEmail, setShowErrEmail] = useState("hide")

    const [open, setOpen] = useState(false);

    const handleClick = (e) => {
        e.preventDefault()
        let regExp = /([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/;
        if (regExp.test(email)) {
            setOpen(true);
            setName('')
            setEmail('')
            setMessage('')

            setError('')
            setErrEmail('')
            setTimeout(()=>{
                window.location.reload(true)
            },1000)

        }else{
            setShowErr('block')
            setShowErrEmail('block')
        }

    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <form className="col s12 form-sendMe">
            <div className="row">
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">account_circle</i>
                        <label className="active" htmlFor="first_name2">First Name</label>
                        <input id="first_name2" type="text" onChange={e => setName(e.target.value)} value={name}
                               className="validate" required/>
                        <span className={`err-field err-field-${showErr}`}>{error}</span>
                    </div>
                    <div className="input-field col s12">
                        <i className="material-icons prefix">email</i>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" onChange={e => setEmail(e.target.value)} value={email}
                               className="validate" required/>
                        <span className={`err-field err-email-${showErrEmail}`}>{errEmail}</span>
                    </div>
                    <div className="input-field col s12">
                        <i className="material-icons prefix">mode_edit</i>
                        <label htmlFor="message">Message</label>
                        <input id="message" type="text" onChange={e => setMessage(e.target.value)} value={message}
                               className="validate" required/>
                        <span className={`err-field err-field-${showErr}`}>{error}</span>
                    </div>
                </div>
                <div className="row">
                    <Button disabled={name.length < 2 || email.length < 2 || message.length < 2} variant="outlined"
                            onClick={handleClick} id="sendForm"
                            className="btn waves-effect waves-light" type="submit"
                            name="action">
                        <span>Send</span>
                        <i className="material-icons right">send</i>
                    </Button>
                    <Snackbar className="snackbar-block" open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success">
                            This is a success message!
                        </Alert>
                    </Snackbar>
                </div>
            </div>
        </form>
    );
};

export default FormSend;
