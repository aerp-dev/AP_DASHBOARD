export const copyToClipboard = (text: string = ''): void => {
  if (text) navigator?.clipboard?.writeText(text)
}

export const copyTextLinkToClipboard = (text: string = ''): void => {
  if (!text) return

  // Encode the selected text for use in the URL fragment
  const encodedText: string = encodeURIComponent(text)

  // Construct the link with a URL fragment
  const link: string = `${window?.location?.origin}${window?.location?.pathname}#:~:text=${encodedText}`
  console.log(link)

  if (navigator?.clipboard) {
    // Use the Clipboard API if available
    navigator?.clipboard?.writeText(link)
  } else {
    // Fallback for environments without Clipboard API support
    const textarea: HTMLTextAreaElement = document?.createElement('textarea')
    textarea.value = link
    document?.body?.appendChild(textarea)
    textarea?.select()
    try {
      document?.execCommand('copy')
    } catch {
    } finally {
      document?.body?.removeChild(textarea)
    }
  }
}