function constructionCrew(worker) {

    if (worker.dizziness === true) {
        const requiredWater = 0.1 * worker.weight * worker.experience;
        worker.levelOfHydrated += requiredWater;
        worker.dizziness = false
    }

    return worker
}

constructionCrew(
    {
        weight: 80,
        experience: 1,
        levelOfHydrated: 0,
        dizziness: true
    }
)