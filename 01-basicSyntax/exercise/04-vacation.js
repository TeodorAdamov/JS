function vacation(count, groupType, day) {
    let total = 0;
    switch (groupType) {
        case 'Students':
            switch (day) {
                case 'Friday':
                    total = 8.45 * count
                    break;
                case 'Saturday':
                    total = 9.8 * count
                    break;
                case 'Sunday':
                    total = 10.46 * count
                    break;
            }
            break;
        case 'Business':
            switch (day) {
                case 'Friday':
                    total = 10.9 * count
                    break;
                case 'Saturday':
                    total = 15.6 * count
                    break;
                case 'Sunday':
                    total = 16 * count
                    break;
            }
            break;
        case 'Regular':
            switch (day) {
                case 'Friday':
                    total = 15 * count
                    break;
                case 'Saturday':
                    total = 20 * count
                    break;
                case 'Sunday':
                    total = 22.5 * count
                    break;
            }
            break;
    }

    if (groupType === 'Students' && count >= 30) {
        total *= 0.85
    } else if (groupType === 'Business' && count >= 100) {
        if (day === 'Friday') {
            total = total - (10 * 10.9)
        } else if (day === 'Saturday') {
            total = total - (10 * 15.6)
        } else if (day === 'Sunday') {
            total = total - (10 * 16)
        }
    } else if (groupType === 'Regular' && (count >= 10 && count <= 20)) {
        total *= 0.95
    }

    console.log(`Total price: ${total.toFixed(2)}`);
}