function AlertMessage({ message }) {
    const hasSuccess = message.success ? true : false;
    const hasError = message.error ? true : false;

    if(!hasSuccess && !hasError) return null;

    const alertStyles = hasSuccess ? {
        bg: 'bg-green-500',
        text: 'text-white',
        content: message.success,
    } : {
        bg: 'bg-red-500',
        text: 'text-white',
        content: message.error,
    }

    return (
        <div className={`p-3 m-3 text-sm rounded-lg ${alertStyles.bg} ${alertStyles.text} text-center`}>{alertStyles.content}</div>
    )
}

export default AlertMessage;