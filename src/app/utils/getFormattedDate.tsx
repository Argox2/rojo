export default function getFormattedDate(dateString: string): string {
    return new Intl.DateTimeFormat('es-MX', { month: 'short', year: 'numeric' })
        .format(new Date(dateString))
        .replace(/^(\w+)/, match => match.charAt(0).toUpperCase() + match.slice(1));

}
