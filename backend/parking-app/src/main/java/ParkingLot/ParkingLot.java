package ParkingLot;
import javax.persistence.*;

@Entity
public class ParkingLot {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    private String name;

    public ParkingLot() {
    }

    public ParkingLot(Long id, String name){
        this.id = id;
        this.name = name;
    }
    @OneToMany(mappedBy = "ParkingLot")
    private ParkingLot parkingLot;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
