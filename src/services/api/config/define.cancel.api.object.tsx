export function defineCancelApiObject(apiObject: object): object {
    const cancelApiObject:any = {}

    Object.getOwnPropertyNames(apiObject).forEach((apiPropertyName: string) => {
        const cancellationControllerObject: { controller: AbortController | undefined } = {
            controller: undefined,
        }

        cancelApiObject[apiPropertyName] = {
            handleRequestCancellation: (): AbortController => {
                if (cancellationControllerObject.controller) {
                    cancellationControllerObject.controller.abort()
                }

                cancellationControllerObject.controller = new AbortController()

                return cancellationControllerObject.controller
            },
        }
    })

    return cancelApiObject
}