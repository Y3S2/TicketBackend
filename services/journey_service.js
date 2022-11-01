import {
    createJourneyRepo,
    getJourneyByIdRepo,
    getJourneyRepo,
    updateJourneyRepo
} from "../repository/journey_repo.js";

export const saveJourneyService = async (data) => {
    const { employeeId, employeeName, email, nicNo, drivingLicenId } = data;
    try {
        await createJourneyRepo({ employeeId, employeeName, email, nicNo, drivingLicenId });
        return Promise.resolve("Successfully saved Journey.");
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const getJourneyIdService = async (id) => {
    try {
        const Journey = await getJourneyByIdRepo(id);
        return Promise.resolve(Journey);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const getJourneyService = async () => {
    try {
        const Journey = await getJourneyRepo();
        return Promise.resolve(Journey);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const updateJourneyService = async (id, data) => {
    try {
        const Journey = await updateJourneyRepo(id, data);
        return Promise.resolve(Journey);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};