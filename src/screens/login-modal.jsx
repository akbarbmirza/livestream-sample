import './LoginModal.css';

function LoginModal() {
  return (
    <div className='login-modal'>
        <h3>Log in to your account</h3>
        <Input type="email" label="Email address" />
    </div>
  );
}

export default LoginModal;