const { test, describe } = require( "node:test" )
const { deepEqual } = require( "node:assert" )

const { buildPayload } = require( "./utils" )

describe( "slack payload builder", () => {
    test( "displays a list of jobs with status icons", () => {
        const result = buildPayload( {
            "job1": { outputs: null, result: "success" },
            "job2": { outputs: null, result: "failure" }
        } )

        const expected = {
            "text": "pipeline status",
            "blocks": [
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "Hey there 👋, the pipeline has completed with the following results:"
                    }
                },
                {
                    "type": "section",
                    "text": { "type": "mrkdwn", "text": ":white_check_mark: job1" }
                },
                {
                    "type": "section",
                    "text": { "type": "mrkdwn", "text": ":x: job2" }
                },
                {
                    "type": "divider"
                },
                {
                    "type": "context",
                    "elements": [
                        {
                            "type": "mrkdwn",
                            "text": "Please help fix me :sos:"
                        }
                    ]
                }
            ]
        }

        deepEqual( result, expected )
    } )

    test( "all jobs succeed", () => {
        const result = buildPayload( {
            "job1": { outputs: null, result: "success" },
            "job2": { outputs: null, result: "success" }
        } )

        const expected = {
            "text": "pipeline status",
            "blocks": [
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "Hey there 👋, the pipeline has completed with the following results:"
                    }
                },
                {
                    "type": "section",
                    "text": { "type": "mrkdwn", "text": ":white_check_mark: job1" }
                },
                {
                    "type": "section",
                    "text": { "type": "mrkdwn", "text": ":white_check_mark: job2" }
                },
                {
                    "type": "divider"
                },
                {
                    "type": "context",
                    "elements": [
                        {
                            "type": "mrkdwn",
                            "text": "Great job :pray:"
                        }
                    ]
                }
            ]
        }

        deepEqual( result, expected )
    } )
} )

/*

          needs_json='${{ inputs.needs }}'
          any_failures=$(echo "$needs_json" | jq -r 'any(.[]; .result == "failure")')

          echo "result=$([ "$any_failures" == "true" ] && echo ":help:" || echo ":pray:" )" >> $GITHUB_OUTPUT
 */
