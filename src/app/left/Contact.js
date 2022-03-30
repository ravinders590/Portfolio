import React,{useState,useRef} from 'react';
import emailjs from 'emailjs-com';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const Contact = () => {
    const form = useRef();

    const SERVICE_ID='service_6fqhr9f';
    const TEMPLATE_ID='template_hae4d1k';
    const USER_ID='ztWuqA8bCnjpLwbfP';
    
    const [errorMsg, setErrormsg] = useState();
    const [success,setSuccess] = useState('');
    const [buttonAttr, setSubmitData] = useState('Send Message');
    const [userregister, setuser] = useState({
        fullname:'',
        email:'',
        mobile:'',
        message:''

    })

    const handleInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setuser({...userregister,[name]:value});
    }
    
    const sendEmail = (e) => {
        e.preventDefault();
        
        if(userregister.fullname !=='' && userregister.email !=='' && userregister.mobile !=='' && userregister.message !==''){
            setSubmitData('Loading...');
            document.querySelector('#send_message').setAttribute('disabled','disabled');
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
            .then((result) => {
                // console.log(result.text);
                if(result.text === 'OK'){
                    setSubmitData('Send Message');
                    setuser({
                        fullname:'',
                        email:'',
                        mobile:'',
                        message:''
                    });
                    
                    setSuccess(<span className='success'>Thank you {userregister.fullname}! we will contact you soon. </span>)
                document.querySelector('#send_message').removeAttribute('disabled');

            }

           }, (error) => {
               console.log(error.text);
           });
        
           setErrormsg('')
        }else{
            setErrormsg(<span className='error-msg'>All Fields are required!!</span>);
        }
        
        
        
           
    };
    
  return (
    <>
    <section className="left-section contact" id="contact">
        <h3 className="subtitle">Contact</h3>
        <h2 className="title">Get In Touch</h2>
        <p className="desc">If you have any suggestion, project or even you want to say “hello”, please fill out the form below and I will reply you shortly.</p>
        <Box component="form" noValidate autoComplete="off" ref={form} onSubmit={sendEmail}>        
            {success}
        <div className="items_wrap">
            <div className="items">
                <div className="item half">
                    <div className='items_wrap'>
                        <TextField id="outlined-basic" label="Name*" name="fullname" value={userregister.fullname} onChange={handleInput} variant="outlined" />
                    </div>
                    {errorMsg}                
                </div>
                <div className="item half">
                    <div className='items_wrap'>
                        <TextField id="outlined-basic" label="Email*" name="email" value={userregister.email} onChange={handleInput} variant="outlined" />
                    </div>
                    {errorMsg}
                </div>
                <div className="item">
                    <div className='items_wrap'>
                        <TextField id="outlined-basic" label="Phone*" name="mobile" value={userregister.mobile} onChange={handleInput} variant="outlined" />
                    </div>
                    {errorMsg}
                </div>
                <div className="item">
                    <div className='items_wrap'>
                        <TextField id="outlined-basic" label="Message*" multiline          maxRows={10} name="message" value={userregister.message} onChange={handleInput} variant="outlined" />
                    </div>
                    {errorMsg}
                </div>
                <div className="item">
                    
                    <input  type="submit" className="a" id="send_message" value={buttonAttr} />
                    
                </div>
            </div>
        </div>
        </Box>
    </section>
    </>
  )
}

export default Contact;