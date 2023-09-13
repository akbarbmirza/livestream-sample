import { Button } from '../components/Button.tsx';
import { Input } from '../components/Input.tsx'
import './LoginModal.css';

function LoginModal() {
  return (
    <div className='login-modal'>
        <h3>Log in to your account</h3>
        <Input type="email" label="Email address" />
        <Input type="email" label="Password" />
        <Button variant="primary">Log In</Button>
    </div>
  );
}

export default LoginModal;