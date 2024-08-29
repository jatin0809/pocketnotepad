export default function formatDate(noteDate){
    const date = new Date(noteDate);

    const dateDetails = {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    };

    const timeDetails = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    };

    const formattedDate = date.toLocaleDateString('en-GB', dateDetails);
    const formattedTime = date.toLocaleTimeString('en-US', timeDetails);

    return `${formattedDate} . ${formattedTime}`;
}