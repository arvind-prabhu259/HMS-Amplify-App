/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBOOKING = /* GraphQL */ `
  mutation CreateBOOKING(
    $input: CreateBOOKINGInput!
    $condition: ModelBOOKINGConditionInput
  ) {
    createBOOKING(input: $input, condition: $condition) {
      bOOKINGID
      rOLLNO
      rOOMID
      aLLOTMENTDATE
      cOMPLETIONDATE
      sTATE
      __typename
    }
  }
`;
export const updateBOOKING = /* GraphQL */ `
  mutation UpdateBOOKING(
    $input: UpdateBOOKINGInput!
    $condition: ModelBOOKINGConditionInput
  ) {
    updateBOOKING(input: $input, condition: $condition) {
      bOOKINGID
      rOLLNO
      rOOMID
      aLLOTMENTDATE
      cOMPLETIONDATE
      sTATE
      __typename
    }
  }
`;
export const deleteBOOKING = /* GraphQL */ `
  mutation DeleteBOOKING(
    $input: DeleteBOOKINGInput!
    $condition: ModelBOOKINGConditionInput
  ) {
    deleteBOOKING(input: $input, condition: $condition) {
      bOOKINGID
      rOLLNO
      rOOMID
      aLLOTMENTDATE
      cOMPLETIONDATE
      sTATE
      __typename
    }
  }
`;
export const createHOSTEL = /* GraphQL */ `
  mutation CreateHOSTEL(
    $input: CreateHOSTELInput!
    $condition: ModelHOSTELConditionInput
  ) {
    createHOSTEL(input: $input, condition: $condition) {
      hOSTELID
      hOSTELNAME
      lOCATION
      __typename
    }
  }
`;
export const updateHOSTEL = /* GraphQL */ `
  mutation UpdateHOSTEL(
    $input: UpdateHOSTELInput!
    $condition: ModelHOSTELConditionInput
  ) {
    updateHOSTEL(input: $input, condition: $condition) {
      hOSTELID
      hOSTELNAME
      lOCATION
      __typename
    }
  }
`;
export const deleteHOSTEL = /* GraphQL */ `
  mutation DeleteHOSTEL(
    $input: DeleteHOSTELInput!
    $condition: ModelHOSTELConditionInput
  ) {
    deleteHOSTEL(input: $input, condition: $condition) {
      hOSTELID
      hOSTELNAME
      lOCATION
      __typename
    }
  }
`;
export const createROOM = /* GraphQL */ `
  mutation CreateROOM(
    $input: CreateROOMInput!
    $condition: ModelROOMConditionInput
  ) {
    createROOM(input: $input, condition: $condition) {
      rOOMID
      hOSTELID
      rOOMNUMBER
      rOOMTYPE
      fLOORNUMBER
      cAPACITY
      aVAILABLE
      __typename
    }
  }
`;
export const updateROOM = /* GraphQL */ `
  mutation UpdateROOM(
    $input: UpdateROOMInput!
    $condition: ModelROOMConditionInput
  ) {
    updateROOM(input: $input, condition: $condition) {
      rOOMID
      hOSTELID
      rOOMNUMBER
      rOOMTYPE
      fLOORNUMBER
      cAPACITY
      aVAILABLE
      __typename
    }
  }
`;
export const deleteROOM = /* GraphQL */ `
  mutation DeleteROOM(
    $input: DeleteROOMInput!
    $condition: ModelROOMConditionInput
  ) {
    deleteROOM(input: $input, condition: $condition) {
      rOOMID
      hOSTELID
      rOOMNUMBER
      rOOMTYPE
      fLOORNUMBER
      cAPACITY
      aVAILABLE
      __typename
    }
  }
`;
export const createSTUDENT = /* GraphQL */ `
  mutation CreateSTUDENT(
    $input: CreateSTUDENTInput!
    $condition: ModelSTUDENTConditionInput
  ) {
    createSTUDENT(input: $input, condition: $condition) {
      rOLLNO
      fIRSTNAME
      lASTNAME
      aGE
      bRANCH
      mOBNO
      eMAIL
      aDDRESS
      dATEOFADMISSION
      __typename
    }
  }
`;
export const updateSTUDENT = /* GraphQL */ `
  mutation UpdateSTUDENT(
    $input: UpdateSTUDENTInput!
    $condition: ModelSTUDENTConditionInput
  ) {
    updateSTUDENT(input: $input, condition: $condition) {
      rOLLNO
      fIRSTNAME
      lASTNAME
      aGE
      bRANCH
      mOBNO
      eMAIL
      aDDRESS
      dATEOFADMISSION
      __typename
    }
  }
`;
export const deleteSTUDENT = /* GraphQL */ `
  mutation DeleteSTUDENT(
    $input: DeleteSTUDENTInput!
    $condition: ModelSTUDENTConditionInput
  ) {
    deleteSTUDENT(input: $input, condition: $condition) {
      rOLLNO
      fIRSTNAME
      lASTNAME
      aGE
      bRANCH
      mOBNO
      eMAIL
      aDDRESS
      dATEOFADMISSION
      __typename
    }
  }
`;
