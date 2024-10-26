import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
	return (
		<div className="absolute w-full h-full flex justify-center items-center">
			<Card className="mx-auto max-w-sm ">
				<CardHeader>
					<CardTitle className="text-xl">Sign Up</CardTitle>
					<CardDescription>
						Enter your information to create an account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid gap-4">
						<div className="grid gap-2">
							<Label htmlFor="username">Username</Label>
							<Input
								id="username"
								type="text"
								placeholder="user123"
								required
							/>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								type="email"
								placeholder="user@example.com"
								required
							/>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="password">Password</Label>
							<Input id="password" type="password" />
						</div>
						<div className="grid gap-2">
							<Label htmlFor="password">Confirm Password</Label>
							<Input id="password" type="password" />
						</div>
						<Button type="submit" className="w-full">
							Create an account
						</Button>
						<Button variant="outline" className="w-full">
							Sign up with Google
						</Button>
					</div>
					<div className="mt-4 text-center text-sm">
						Already have an account?{" "}
						<Link to="/auth/login" className="underline">
							Sign in
						</Link>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
