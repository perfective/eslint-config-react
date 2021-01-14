import {
    UnicornPreventAbbreviations,
    unicornPreventAbbreviations as unicornPreventAbbreviationsDefaults,
} from '@perfective/eslint-config/rules';

export function unicornPreventAbbreviations(
    replacements: Record<string, boolean | Record<string, boolean>> = {},
    options: Partial<Pick<UnicornPreventAbbreviations, 'checkProperties'>> = {},
): UnicornPreventAbbreviations {
    return unicornPreventAbbreviationsDefaults({
        prop: false,
        props: false,
        ref: false,
        refs: false,
        ...replacements,
    }, options);
}
