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
import Metal from '@/assets/metal3.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center bg-[#000615] w-full h-screen">
      <Card className="flex flex-col w-1/2">
        <CardHeader className="text-left">
          <img className="py-4" src={Metal} width={164} />
          <CardTitle>BetterMode Account</CardTitle>
          <CardDescription>
            Login to your BetterMode account to access beautiful Posts.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1 text-left">
            <Label htmlFor="name">Email Address</Label>
            <Input id="name" />
          </div>
          <div className="space-y-1 text-left">
            <Label htmlFor="username">Password</Label>
            <Input id="username" type="password" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-row gap-4">
          <Button onClick={() => navigate('/')}>Back</Button>
          <Button className="w-[164px] bg-[#374151]">Login</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
