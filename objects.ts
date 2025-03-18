export interface Creation {
    value: any;
    at: string;
    timestamp: number;
    exists: boolean | undefined;
    index?: number | undefined;
};

export interface events {
    new: (incomingCreation: Creation) => void
    all: (allOfUs: Creation[]) => void
};