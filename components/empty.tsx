import Image from "next/image";

interface EmptyProps {
    label: string;
}

export const Empty = ({ label }: EmptyProps) => {
    return (
        <div className="h-full p-20 flex flex-col items-center justify-center">
            <div className="relative h-72 w-72">
                <Image fill alt="empty" src="/empty.png" />
            </div>
            <p className="text-muted-forgeground text-center text-sm">
                {label}
            </p>
        </div>
    );
};
