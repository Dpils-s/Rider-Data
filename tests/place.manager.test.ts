import { expect } from 'chai';
import PlaceManager from '../src/Manager/PlaceManager';
import MockPlaceController from "./mock/MockPlaceController";
describe('PlaceManager', () => {
    let placeManager: PlaceManager;
    let mockController: MockPlaceController;

    beforeEach(() => {
        mockController = new MockPlaceController();
        placeManager = new PlaceManager(mockController);
    });

    it('should get all places', async () => {
        const places = await placeManager.getAllPlaces();
        expect(places).to.have.lengthOf(2);
        expect(places[0].place).to.deep.equal({name: 'Place 1', location: {lat: 0, lng: 0}});
        expect(places[1].place).to.deep.equal({name: 'Place 2', location: {lat: 0, lng: 0}});
    });

    it('should get a place by ID', async () => {
        const place = await placeManager.getPlaceById('1');
        expect(place).to.not.be.null;
        expect(place?.place).to.deep.equal({ name: 'Place 1', location: { lat: 0, lng: 0 } });
    });

    it('should return null when getting a non-existent place', async () => {
        const place = await placeManager.getPlaceById('3');
        expect(place).to.be.null;
    });

    it('should create a new place', async () => {
        const newPlace = await placeManager.createPlace(JSON, 'New Description');
        expect(newPlace).to.not.be.null;
        expect(newPlace?.place).to.equal(JSON);
        expect(newPlace?.description).to.equal('New Description');
    });
});