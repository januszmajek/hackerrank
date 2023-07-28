function climbingLeaderboard(ranked: number[], player: number[]): number[] {
    let result: number[] = [];
    let noDuplicateScores: number[] = [];

    for (let i: number = 0; i < ranked.length; i++) {
        if (ranked[i] != ranked[i - 1]) {
            noDuplicateScores.push(ranked[i]);
        }
    }

    let i: number = noDuplicateScores.length - 1;
    for (let score of player) {
        while (i >= 0) {
            if (score >= noDuplicateScores[i]) {
                i--;
            } else {
                break;
            }
        }
        result.push(i + 2);
    }

    return result;
}
