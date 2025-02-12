export const formatTime = (time: string) => {
    const [hour, minute] = time.split(":").map(Number);
    const formattedMinute = String(minute).padStart(2, "0");
    return `${hour}時${formattedMinute}分`;
};
