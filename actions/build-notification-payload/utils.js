/**
 * @typedef {Object} Job
 * @property {?Object} outputs
 * @property {"success" | "failure"} result
 */

const statusToEmoji = ( status ) => status === "failure" ? ":x:" : ":white_check_mark:"
const markdownText = ( text ) => ( { type: "mrkdwn", text } )
const markdownSection = ( text ) => ( { type: "section", text: markdownText( text ) } )
const overallBuildMessage = ( needs ) => Object.values( needs ).some( job => job.result === "failure" ) ? "Please help fix me :sos:" : "Great job :pray:"

/**
 * builds a slack api payload using the blocks syntax for creating
 * @param {Record<string, Job>} needs
 * @return {{blocks: [{text: {text: string, type: string}, type: string}|{type: string}], text: string}}
 */
const buildPayload = needs => {
    const messages = Object.entries( needs )
        .map( ( [ name, value ] ) => `${ statusToEmoji( value.result ) } ${ name }` )

    const sections = messages.map( markdownSection )
    const header = markdownSection( "Hey there 👋, the pipeline has completed with the following results:" )

    const footer = {
        "type": "context",
        "elements": [ markdownText( overallBuildMessage( needs ) ) ]
    }

    return {
        "text": "pipeline status",
        "blocks": [ header, ...sections, { "type": "divider" }, footer ]
    }
}

module.exports = { buildPayload }
