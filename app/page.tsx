import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { SignInButton, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex-1 flex flex-col items-center px-4 py-16 sm:px-6 text-center gap-20">
        <div className="max-w-4xl space-y-8 relative">
          <div className="max-w-4xl space-y-8 relative">
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight bg-clip-text text-transparent
            bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 dark:from-green-400 
            dark:via-blue-400 dark:to-purple-400">
              Connect With Employees
              <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 
              to-pink-600 dark:from-purple-600 dark:to-pink-400">
                Leverage Technology
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The modern HR management platform that allows you to bridge the gap with your
              employees by leveraging technology to automate human resource processes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="outline" size="lg" className="text-blue-600 text-lg px-8
                py-6 h-auto">
                  Start Now
                </Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </main>
    </div>
  );
}
