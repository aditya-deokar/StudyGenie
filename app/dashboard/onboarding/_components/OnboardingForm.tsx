"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/use-fetch";
import { updateUser } from "@/actions/user";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { onboardingSchema } from "@/lib/schema";
import { z } from "zod";

// Define a type for the industry object
interface Industry {
    id: string;
    name: string;
    subIndustries: string[];
}

interface OnboardingFormProps {
    industries: Industry[];
}

const OnboardingForm: React.FC<OnboardingFormProps> = ({ industries }) => {
    const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);
    const router = useRouter();

    const {
        data: updateResult,
        fn: updateUserFn,
        loading: updateLoading,
    } = useFetch(updateUser);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
    } = useForm({
        resolver: zodResolver(onboardingSchema),
        defaultValues: { // Optional: Initialize default values
            industry: "",
            subIndustry: "",
            experience: "",
            skills: "",
            bio: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof onboardingSchema>) => {
        console.log(values);

        try {
            const formattedIndustry = `${values.industry}-${values.subIndustry.toLowerCase().replace(/ /g, "-")}`;

            await updateUserFn({
                ...values,
                industry: formattedIndustry,
            });
        } catch (error:any) {
            console.error("onboarding error", error);
        }
    };

    useEffect(() => {
        if (updateResult?.success && !updateLoading) {
            toast.success("Profile Completed Successfully!");
            router.push("/dashboard");
            router.refresh();
        }
    }, [updateResult, updateLoading, router]);

    const watchIndustry = watch("industry");

    return (
        <div className="flex items-center justify-center bg-background">
            <Card className="w-full max-w-lg mt-10 mx-2">
                <CardHeader className="">
                    <CardTitle className="gradient-title text-4xl">
                        Complete Your Profile
                    </CardTitle>
                    <CardDescription>
                        Select your industry to get personalized career insights and
                        recommendations.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        {/* Industry */}
                        <div className="space-y-2">
                            <Label htmlFor="industry">Industry</Label>
                            <Select
                                onValueChange={(value) => {
                                    setValue("industry", value);
                                    setSelectedIndustry(
                                        industries.find((ind) => ind.id === value) || null
                                    );
                                    setValue("subIndustry", "");
                                }}
                            >
                                <SelectTrigger id="industry" className="">
                                    <SelectValue placeholder="Select an industry" />
                                </SelectTrigger>
                                <SelectContent>
                                    {industries.map((ind) => (
                                        <SelectItem key={ind.id} value={ind.id}>
                                            {ind.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors.industry && (
                                <p className="text-sm text-red-500">
                                    {errors.industry.message}
                                </p>
                            )}
                        </div>

                        {/* subindustry */}
                        {watchIndustry && (
                            <div className="space-y-2">
                                <Label htmlFor="subIndustry">Specialization</Label>
                                <Select
                                    onValueChange={(value) => setValue("subIndustry", value)}
                                >
                                    <SelectTrigger id="subIndustry" className="">
                                        <SelectValue placeholder="Select an sub-industry" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {selectedIndustry?.subIndustries.map((ind, index) => (
                                            <SelectItem key={index} value={ind}>
                                                {ind}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {errors.subIndustry && (
                                    <p className="text-sm text-red-500">
                                        {errors.subIndustry.message}
                                    </p>
                                )}
                            </div>
                        )}

                        {/* experience */}
                        <div className="space-y-2">
                            <Label htmlFor="experience">Years of Experience</Label>
                            <Input
                                id="experience"
                                type="number"
                                min="0"
                                max="50"
                                placeholder="Enter years of experience"
                                {...register("experience")}
                            />

                            {errors.experience && (
                                <p className="text-sm text-red-500">
                                    {errors.experience.message}
                                </p>
                            )}
                        </div>

                        {/* skills */}
                        <div className="space-y-2">
                            <Label htmlFor="skills">Skills</Label>
                            <Input
                                id="skills"
                                placeholder="e.g., Python, Javascript, Project Management"
                                {...register("skills")}
                            />
                            <p className="text-sm text-muted-foreground ">
                                Separate multiple skills with commas
                            </p>

                            {errors.skills && (
                                <p className="text-sm text-red-500">{errors.skills.message}</p>
                            )}
                        </div>

                        {/* bio */}
                        <div className="space-y-2">
                            <Label htmlFor="bio">Professional Bio</Label>
                            <Textarea
                                id="bio"
                                placeholder="Tell us about your professional background..."
                                className="h-32"
                                {...register("bio")}
                            />

                            {errors.bio && (
                                <p className="text-sm text-red-500">{errors.bio.message}</p>
                            )}
                        </div>

                        <Button type="submit" disabled={updateLoading} className="w-full">
                            {updateLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Saving...
                                </>
                            ) : (
                                "Complete Profile"
                            )}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default OnboardingForm;