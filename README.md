# Pipeline-Actions

Set of GitHub Actions to explore the capabilities of the platform

# Workshop

## The Delivery Pipeline

* Supports the primary practices of Continuous Delivery
    - Continuous Integration
    - Configuration Management
    - Continuous Testing

* Stages of Verification
    - Isolated
    - Integrated
    - Manual
    - Monitor

## Principles

* Keep it Simple
* Make it Composable
* Share the Love

## Yaml

* The Joys of Yaml
* To quote or not to quote
* Multiline indicators: `|`, `|>`, `>`

## Jobs

* Conditional
* Outputs
* Environment Variables

## Steps

* Optional naming

## Composite Actions

Like functions in a programming language, can pass values into and return values back

## Objectives

* Construct a repository workflow the encodes the patterns and conventions within the
  organization
* Describe the tooling support for building pipelines
* Identify 3 ways to pass data between jobs
* List 3 types of composite actions
    - docker
    - javascript
    - shell
* Create a composite action and integrated into a workflow
* Create a re-usable workflow and integrate into a primary workflow

## Exercises

1. Create a simple 'hello, world' workflow and run it locally
    * Identify the major elements of a Workflow
    *
2. Create a shell-based composite action and run it locally
    * move the 'hello, world' step into a 'composite' actions
    * reference it from the main workflow and observe the outcome locally
3. Call a re-usable workflow from a separate repository
    * Versioning
