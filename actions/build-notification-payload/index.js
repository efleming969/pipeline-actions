const OS = require( "node:os" )
const FS = require( "node:fs" )

const { buildPayload } = require( "./utils" )

const needs = ( JSON.parse( process.env.INPUT_NEEDS ) )
const payload = buildPayload( needs )

function setOutput( key, value ) {
    const output = process.env[ "GITHUB_OUTPUT" ]
    FS.appendFileSync( output, `${ key }=${ value }${ OS.EOL }` )
}

setOutput( "result", JSON.stringify( payload ) )
