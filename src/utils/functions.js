export const getGenderData = (userData) => {

    if (!userData) return;

    const genderData = userData?.reduce((acc, user) => {
        const { gender } = user;
        acc[gender] = (acc[gender] || 0) + 1;
        return acc;
    }, {});

    return {
        labels: Object.keys(genderData),
        datasets: [
            {
                data: Object.values(genderData),
                backgroundColor: ["#FF6384", "#36A2EB"],
                hoverBackgroundColor: ["#FF6384", "#36A2EB"],
            },
        ],
    };
};

export const getNationalityData = (userData) => {

    if (!userData) return;

    const nationalityData = userData?.reduce((acc, user) => {
        const { nat } = user;
        acc[nat] = (acc[nat] || 0) + 1;
        return acc;
    }, {});


    return {
        labels: Object.keys(nationalityData),
        datasets: [
            {
                data: Object.values(nationalityData),
                backgroundColor: ["#FFCE56", "#4BC0C0", "#FF6384"],
                hoverBackgroundColor: ["#FFCE56", "#4BC0C0", "#FF6384"],
            },
        ],
    };
};