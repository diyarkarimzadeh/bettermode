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
import Metal from '@/assets/metal3.webp';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_NETWORK } from '@/services/graph-ql/mutations';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [loginNetwork, { loading, error }] = useMutation(LOGIN_NETWORK);

  const handleLogin = async () => {
    try {
      const response = await loginNetwork({
        variables: {
          input: {
            usernameOrEmail: email,
            password: password,
          },
        },
      });

      if (response?.data?.loginNetwork) {
        const { accessToken, refreshToken } = response.data.loginNetwork;
        console.log('Access Token:', accessToken);
        console.log('Refresh Token:', refreshToken);

        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
      }
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'email') {
      setEmail(e.target.value);
    } else if (e.target.id === 'password') {
      setPassword(e.target.value);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <Card className="bg-[#000615] flex flex-col w-1/3 min-w-[320px] z-10">
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
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button
            onClick={() => handleLogin()}
            className="w-full bg-[#0168F4] font-semibold"
          >
            Login
          </Button>
          <Button className="w-full" onClick={() => navigate('/')}>
            Back
          </Button>
        </CardFooter>
      </Card>
      <div className="absolute opacity-70 top-0 z-1 h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
    </div>
  );
};

export default Login;
