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

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'email') {
      setEmail(e.target.value);
    }
  };

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
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full bg-[#0168F4] font-semibold">
            Send OTP code
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
