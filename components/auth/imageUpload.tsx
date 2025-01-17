import { cn } from "@/lib/utils";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

interface DropzoneProps {
    onChange: (base64: string) => void;
    label: string;
    value?: string;
    disabled?: boolean;
    className?: string;
}

const ImageUpload: React.FC<DropzoneProps> = ({ onChange, label, value, disabled, className }) => {
    const [base64, setBase64] = useState<string | undefined>();

    useEffect(() => {
        setBase64(value);
    }, [value])
    // console.log(base64)

    const handleChange = useCallback((base64: string) => {
        onChange(base64);
    }, [onChange]);

    const handleDrop = useCallback((files: any) => {
        const file = files[0]
        const reader = new FileReader();
        reader.onload = (event: any) => {
            setBase64(event.target.result);
            handleChange(event.target.result);
        };
        reader.readAsDataURL(file);
    }, [handleChange])

    const { getRootProps, getInputProps } = useDropzone({
        maxFiles: 1,
        onDrop: handleDrop,
        disabled,
        accept: {
            'image/jpeg': [],
            'image/png': [],
        }
    });

    return (
        (<div {...getRootProps({
            className: cn(
                'w-full p-4 text-white text-center border-2 border-dotted rounded-md border-neutral-700',
                className
            )
        })}>
            <input {...getInputProps()} />
            {base64 ? (
                <div className="flex items-center justify-center">
                    <Image
                        src={base64}
                        height="100"
                        width="100"
                        alt="Uploaded image"
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }} />
                </div>
            ) : (
                <p className="text-white">{label}</p>
            )}
        </div>)
    );
}

export default ImageUpload;