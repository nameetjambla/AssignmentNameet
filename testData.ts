/**
 * Test Data - Centralized test data for flight search automation
 */

export const FLIGHT_SEARCH_DATA = {
  // Valid airport codes
  airports: {
    DEL: 'DEL', // Delhi
    BOM: 'BOM', // Mumbai
    NYC: 'NYC', // New York
    LHR: 'LHR', // London
    CDG: 'CDG', // Paris
    DXB: 'DXB', // Dubai
  },

  // Test scenarios
  scenarios: {
    // TC01: Valid route with available flights (today)
    validSearchToday: {
      departure: 'DEL',
      destination: 'BOM',
      dateOffset: 0, // Today
      expectedToHaveResults: true,
      tag: '@smoke @tc01',
    },

    // TC11a: Different date - Tomorrow
    validSearchTomorrow: {
      departure: 'DEL',
      destination: 'BOM',
      dateOffset: 1, // Tomorrow
      expectedToHaveResults: true,
      tag: '@regression @tc11',
    },

    // TC11b: Different date - 7 days from today
    validSearchFutureDate: {
      departure: 'DEL',
      destination: 'BOM',
      dateOffset: 7,
      expectedToHaveResults: true,
      tag: '@regression @tc11',
    },

    // TC08: Verify flight details accuracy
    verifyFlightDetails: {
      departure: 'DEL',
      destination: 'BOM',
      dateOffset: 1,
      expectedDetails: {
        hasAirline: true,
        hasDuration: true,
        hasPrice: true,
        hasDepartureTime: true,
        hasArrivalTime: true,
      },
      tag: '@smoke @tc08',
    },

    // TC03: Missing destination airport validation
    missingDestination: {
      departure: 'DEL',
      destination: '', // Empty
      dateOffset: 1,
      expectedToHaveError: true,
      expectedErrorText: 'destination',
      tag: '@regression @tc03',
    },

    // TC06: Past date rejection
    pastDateSearch: {
      departure: 'DEL',
      destination: 'BOM',
      dateOffset: -1, // Yesterday
      expectedToHaveError: true,
      expectedErrorText: 'past',
      tag: '@regression @tc06',
    },

    // TC02: Missing departure airport validation
    missingDeparture: {
      departure: '',
      destination: 'BOM',
      dateOffset: 1,
      expectedToHaveError: true,
      expectedErrorText: 'departure',
      tag: '@regression @tc02',
    },
  },

  // Expected timeout values
  timeouts: {
    elementWait: 10000,
    resultLoad: 15000,
    errorDisplay: 5000,
  },

  // Retry configuration
  retries: {
    attempts: 3,
    delay: 1000,
  },
};

export default FLIGHT_SEARCH_DATA;
