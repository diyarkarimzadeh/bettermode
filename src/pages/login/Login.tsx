import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Metal from '@/assets/metal2.webp';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_NETWORK } from '@/services/graph-ql/mutations';
import { LoginData } from './Login.interface';
import { LoaderIcon } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [loginNetworkWithPassword, { loading, error }] =
    useMutation<LoginData>(LOGIN_NETWORK);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'email') {
      setEmail(e.target.value);
    } else if (e.target.id === 'password') {
      setPassword(e.target.value);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await loginNetworkWithPassword({
        variables: {
          input: {
            usernameOrEmail: email,
            password: password,
          },
        },
      });
      console.log('Login successful:', response.data);
      const { accessToken, member } =
        response.data?.loginNetworkWithPassword || {};
      localStorage.setItem('accessToken', accessToken || '');
      localStorage.setItem('email', member?.email || '');
      localStorage.setItem('profilePicture', member?.profilePicture.url || '');
      localStorage.setItem('sessionId', member?.activeSession.id || '');
      localStorage.setItem(
        'active',
        String(member?.activeSession.active) || '',
      );
      navigate('/');
    } catch (e) {
      console.error('Login error:', e);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <Card className="bg-[#000615] flex flex-col w-1/2 min-w-[320px] z-10">
        <CardHeader className="text-left">
          <img className="py-4" src={Metal} width={164} />
          <CardTitle>BetterMode Account</CardTitle>
          <CardDescription>
            Login to your BetterMode account to access beautiful Posts.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1 text-left">
            <Label htmlFor="email">Email</Label>
            <Input
              value={email}
              onChange={handleInputChange}
              id="email"
              type="email"
            />
          </div>
          <div className="space-y-1 text-left">
            <Label htmlFor="password">Password</Label>
            <Input
              value={password}
              onChange={handleInputChange}
              id="password"
              type="password"
            />
            <p className="text-left font-semibold text-red-700 pt-3">
              {error?.message}
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button
            onClick={() => handleLogin()}
            className="w-full bg-[#0168F4] border-0 hover:bg-[#0146f4] hover:border-0 font-semibold"
            disabled={loading}
          >
            {loading && <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />}
            Login
          </Button>
          <Button
            className="w-full border-0 bg-transparent hover:bg-slate-900 hover:border-0"
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </CardFooter>
      </Card>
      <div className="absolute opacity-70 top-0 z-1 h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
    </div>
  );
};

export default Login;
