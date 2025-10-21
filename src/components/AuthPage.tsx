import { Button } from './ui/button';

export const AuthPage = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-[#1a1a1a]">
        <Button variant={'secondary'} size={'sm'} className="cursor-pointer">
          Click Me
        </Button>
      </div>
    </>
  );
};
