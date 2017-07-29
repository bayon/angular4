"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 12, name: 'Brief', description: '9 years of Professional Experience' },
            { id: 13, name: 'Technical', description: 'PHP Javascript MySql' },
            { id: 14, name: 'Experience', description: 'JPPA, Codigo, WestIPC, Indatus, Aircom' },
            { id: 15, name: 'Examples', description: 'http://www.forteworks.com' },
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map