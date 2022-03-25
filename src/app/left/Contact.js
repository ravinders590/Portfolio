import React,{useState,useRef} from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
    const form = useRef();

    const SERVICE_ID='service_6fqhr9f';
    const TEMPLATE_ID='template_hae4d1k';
    const USER_ID='ztWuqA8bCnjpLwbfP';
    
    const [errorMsg, setErrormsg] = useState();
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
                console.log(result.text);
                if(result.text === 'OK'){
                    setSubmitData('Send Message');
                    setuser({
                        fullname:'',
                        email:'',
                        mobile:'',
                        message:''
                    });
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
        <form method='post' ref={form} onSubmit={sendEmail} autoComplete="off">
        <div className="items_wrap">
            <div className="items">
                <div className="item half">
                    <div className="input_wrapper ">
                        <input type="text" className='focuselement' name="fullname" id="name" value={userregister.fullName} onChange={handleInput} autoComplete="false" />
                        <span className="moving_placeholder">Name *</span>
                        
                    </div>
                    {errorMsg}
                </div>
                <div className="item half">
                    <div className="input_wrapper ">
                        <input type="email" className='focuselement' value={userregister.email} name="email" id="email" onChange={handleInput} autoComplete="false" />
                        <span className="moving_placeholder">Email *</span>
                    </div>
                    {errorMsg}
                </div>
                <div className="item">
                    <div className="input_wrapper ">
                        <input type="text" id="phone" className='focuselement' value={userregister.mobile} name="mobile" onChange={handleInput}  autoComplete="false"/>
                        <span className="moving_placeholder">Phone</span>
                    </div>
                    {errorMsg}
                </div>
                <div className="item">
                    <div className="input_wrapper ">
                        <textarea name="message" id="message" value={userregister.message} onChange={handleInput} className='focuselement' autoComplete="false"></textarea>
                        <span className="moving_placeholder">Message</span>
                    </div>
                    {errorMsg}
                </div>
                <div className="item">
                    
                    <input  type="submit" className="a" id="send_message" value={buttonAttr} />
                    
                </div>
            </div>
        </div>
        </form>
    </section>
    </>
  )
}

export default Contact;