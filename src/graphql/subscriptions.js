/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBOOKING = /* GraphQL */ `
  subscription OnCreateBOOKING($filter: ModelSubscriptionBOOKINGFilterInput) {
    onCreateBOOKING(filter: $filter) {
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
export const onUpdateBOOKING = /* GraphQL */ `
  subscription OnUpdateBOOKING($filter: ModelSubscriptionBOOKINGFilterInput) {
    onUpdateBOOKING(filter: $filter) {
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
export const onDeleteBOOKING = /* GraphQL */ `
  subscription OnDeleteBOOKING($filter: ModelSubscriptionBOOKINGFilterInput) {
    onDeleteBOOKING(filter: $filter) {
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
export const onCreateHOSTEL = /* GraphQL */ `
  subscription OnCreateHOSTEL($filter: ModelSubscriptionHOSTELFilterInput) {
    onCreateHOSTEL(filter: $filter) {
      hOSTELID
      hOSTELNAME
      lOCATION
      __typename
    }
  }
`;
export const onUpdateHOSTEL = /* GraphQL */ `
  subscription OnUpdateHOSTEL($filter: ModelSubscriptionHOSTELFilterInput) {
    onUpdateHOSTEL(filter: $filter) {
      hOSTELID
      hOSTELNAME
      lOCATION
      __typename
    }
  }
`;
export const onDeleteHOSTEL = /* GraphQL */ `
  subscription OnDeleteHOSTEL($filter: ModelSubscriptionHOSTELFilterInput) {
    onDeleteHOSTEL(filter: $filter) {
      hOSTELID
      hOSTELNAME
      lOCATION
      __typename
    }
  }
`;
export const onCreateROOM = /* GraphQL */ `
  subscription OnCreateROOM($filter: ModelSubscriptionROOMFilterInput) {
    onCreateROOM(filter: $filter) {
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
export const onUpdateROOM = /* GraphQL */ `
  subscription OnUpdateROOM($filter: ModelSubscriptionROOMFilterInput) {
    onUpdateROOM(filter: $filter) {
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
export const onDeleteROOM = /* GraphQL */ `
  subscription OnDeleteROOM($filter: ModelSubscriptionROOMFilterInput) {
    onDeleteROOM(filter: $filter) {
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
export const onCreateSTUDENT = /* GraphQL */ `
  subscription OnCreateSTUDENT($filter: ModelSubscriptionSTUDENTFilterInput) {
    onCreateSTUDENT(filter: $filter) {
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
export const onUpdateSTUDENT = /* GraphQL */ `
  subscription OnUpdateSTUDENT($filter: ModelSubscriptionSTUDENTFilterInput) {
    onUpdateSTUDENT(filter: $filter) {
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
export const onDeleteSTUDENT = /* GraphQL */ `
  subscription OnDeleteSTUDENT($filter: ModelSubscriptionSTUDENTFilterInput) {
    onDeleteSTUDENT(filter: $filter) {
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
