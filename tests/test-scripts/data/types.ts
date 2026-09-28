export type OperationType = 'Add' | 'Subtract' | 'Multiply' | 'Divide' | 'Concatenate';

export interface TestCaseData {
  id: string;
  name: string;
  firstNumber: string;
  secondNumber?: string;
  operation: OperationType;
  integersOnly?: boolean;
  expectedAnswer?: string;
  expectedError?: string;
}

export interface BuildBugTestCase {
  id: string;
  name: string;
  targetBuild: string;
  firstNumber?: string;
  secondNumber?: string;
  operation?: OperationType;
  integersOnly?: boolean;
  expectedBugDescription: string;
}
