/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAllHostelInfo = /* GraphQL */ `
  query GetAllHostelInfo {
    getAllHostelInfo {
      hostelName
      location
      numRooms
      numAvailable
      __typename
    }
  }
`;
export const getHostelInfo = /* GraphQL */ `
  query GetHostelInfo($hostelId: Int) {
    getHostelInfo(hostelId: $hostelId) {
      hostelName
      location
      roomNo
      floorNo
      RoomType
      capacity
      available
      __typename
    }
  }
`;
export const retrieveBookingInfo = /* GraphQL */ `
  query RetrieveBookingInfo($rollNo: String) {
    retrieveBookingInfo(rollNo: $rollNo) {
      hostelId
      roomNo
      floorNo
      RoomType
      capacity
      available
      allotmentDate
      completionDate
      state
      __typename
    }
  }
`;
export const getCurrentBookingInfo = /* GraphQL */ `
  query GetCurrentBookingInfo($rollNo: String) {
    getCurrentBookingInfo(rollNo: $rollNo) {
      roomId
      roomNo
      floorNo
      RoomType
      capacity
      available
      hostelName
      allotmentDate
      completionDate
      state
      __typename
    }
  }
`;
export const getBOOKING = /* GraphQL */ `
  query GetBOOKING($bOOKINGID: Int!) {
    getBOOKING(bOOKINGID: $bOOKINGID) {
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
export const listBOOKINGS = /* GraphQL */ `
  query ListBOOKINGS(
    $bOOKINGID: Int
    $filter: ModelBOOKINGFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listBOOKINGS(
      bOOKINGID: $bOOKINGID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        bOOKINGID
        rOLLNO
        rOOMID
        aLLOTMENTDATE
        cOMPLETIONDATE
        sTATE
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getHOSTEL = /* GraphQL */ `
  query GetHOSTEL($hOSTELID: Int!) {
    getHOSTEL(hOSTELID: $hOSTELID) {
      hOSTELID
      hOSTELNAME
      lOCATION
      __typename
    }
  }
`;
export const listHOSTELS = /* GraphQL */ `
  query ListHOSTELS(
    $hOSTELID: Int
    $filter: ModelHOSTELFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listHOSTELS(
      hOSTELID: $hOSTELID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        hOSTELID
        hOSTELNAME
        lOCATION
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getROOM = /* GraphQL */ `
  query GetROOM($rOOMID: Int!) {
    getROOM(rOOMID: $rOOMID) {
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
export const listROOMS = /* GraphQL */ `
  query ListROOMS(
    $rOOMID: Int
    $filter: ModelROOMFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listROOMS(
      rOOMID: $rOOMID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        rOOMID
        hOSTELID
        rOOMNUMBER
        rOOMTYPE
        fLOORNUMBER
        cAPACITY
        aVAILABLE
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSTUDENT = /* GraphQL */ `
  query GetSTUDENT($rOLLNO: String!) {
    getSTUDENT(rOLLNO: $rOLLNO) {
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
export const listSTUDENTS = /* GraphQL */ `
  query ListSTUDENTS(
    $rOLLNO: String
    $filter: ModelSTUDENTFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSTUDENTS(
      rOLLNO: $rOLLNO
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const bOOKINGSByROLLNO = /* GraphQL */ `
  query BOOKINGSByROLLNO(
    $rOLLNO: String!
    $sortDirection: ModelSortDirection
    $filter: ModelBOOKINGFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bOOKINGSByROLLNO(
      rOLLNO: $rOLLNO
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        bOOKINGID
        rOLLNO
        rOOMID
        aLLOTMENTDATE
        cOMPLETIONDATE
        sTATE
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const bOOKINGSByROOMID = /* GraphQL */ `
  query BOOKINGSByROOMID(
    $rOOMID: Int!
    $sortDirection: ModelSortDirection
    $filter: ModelBOOKINGFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bOOKINGSByROOMID(
      rOOMID: $rOOMID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        bOOKINGID
        rOLLNO
        rOOMID
        aLLOTMENTDATE
        cOMPLETIONDATE
        sTATE
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const hOSTELSByHOSTELNAME = /* GraphQL */ `
  query HOSTELSByHOSTELNAME(
    $hOSTELNAME: String!
    $sortDirection: ModelSortDirection
    $filter: ModelHOSTELFilterInput
    $limit: Int
    $nextToken: String
  ) {
    hOSTELSByHOSTELNAME(
      hOSTELNAME: $hOSTELNAME
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        hOSTELID
        hOSTELNAME
        lOCATION
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const rOOMSByHOSTELID = /* GraphQL */ `
  query ROOMSByHOSTELID(
    $hOSTELID: Int!
    $sortDirection: ModelSortDirection
    $filter: ModelROOMFilterInput
    $limit: Int
    $nextToken: String
  ) {
    rOOMSByHOSTELID(
      hOSTELID: $hOSTELID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        rOOMID
        hOSTELID
        rOOMNUMBER
        rOOMTYPE
        fLOORNUMBER
        cAPACITY
        aVAILABLE
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const sTUDENTSByEMAIL = /* GraphQL */ `
  query STUDENTSByEMAIL(
    $eMAIL: String!
    $sortDirection: ModelSortDirection
    $filter: ModelSTUDENTFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sTUDENTSByEMAIL(
      eMAIL: $eMAIL
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
