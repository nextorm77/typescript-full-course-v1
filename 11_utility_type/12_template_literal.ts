/**
 * Template Literal
 */
type CodeFactory = 'Code Factory';

// Uppercase
type CodeFactoryUpper = Uppercase<CodeFactory>;
// type CodeFactoryUpper = 'CODE FACTORY'; // 결과

// Lowercase
type CodeFactoryLower = Lowercase<CodeFactoryUpper>;
// type CodeFactoryLower = 'code factory'; // 결과

// Capitalize
type CodeFactoryCapital = Capitalize<CodeFactoryLower>;
// type CodeFactoryCapital = 'Code Factory'; // 결과

// Uncapitalize
type CodeFactoryUnCapital = Uncapitalize<CodeFactoryCapital>;
// type CodeFactoryUnCapital = 'code factory'; // 결과
