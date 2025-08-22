"use client";

import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import React from "react";

interface LoadingDialogProps {
    loading: boolean;
}

const LoadingDialog: React.FC<LoadingDialogProps> = ({ loading }) => {
    return (
        <AlertDialog open={loading}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogDescription>
                        <div className="flex flex-col items-center justify-center">
                            <Image width={100} height={100} src="/book.gif" alt="Loading" />
                            <h2>Please wait...</h2>
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default LoadingDialog;