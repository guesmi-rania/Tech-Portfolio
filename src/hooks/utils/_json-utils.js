/**
 * @author Rania Guesmi
 * @date 2026-04-08
 */

export const _jsonUtils = {
    /**
     * @param {Object} json
     * @return {string}
     */
    sanitizeForLogs: (json) => {
        const hasFilledField = Object.values(json).some((value) => { return value })

        if(!hasFilledField)
            return ""

        return JSON.stringify(json).replaceAll(`",`, `",<br>`)
            .replaceAll(`":`, `": `)
            .replaceAll(`"`, ``)
            .replaceAll(`{`, ``)
            .replaceAll(`}`, ``)
            .replaceAll(` ,`, ``)
    }
}