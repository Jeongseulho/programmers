function solution(k, room_number) {
    const ans = [];
    const rooms = new Map();
    
    const getEmptyRoom = (wantNum) => {
        if(!rooms.has(wantNum)) {
            rooms.set(wantNum, wantNum + 1);
            return wantNum;
        }
        const emptyRoom = getEmptyRoom(rooms.get(wantNum))
        rooms.set(wantNum, emptyRoom + 1);
        return emptyRoom;
    }
    
    for(const wantNum of room_number) {
        const emptyRoom = getEmptyRoom(wantNum);
        ans.push(emptyRoom);
    }
    
    return ans;
}