function skillMember() {
    var member = {
        name: "member",
        age: 30,
        getAge: function () {
            return this.age;
        }
    };
    return member;
}
