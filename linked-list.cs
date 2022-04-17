

public class Node{

    public int data;
    public Node next;

    public Node(int data){
        data = data;
        next = null;
    }

}

var firstNode = new Node(1);
var secondNode = new Node(2);
var thirdNode = new Node(3);

firstNode.next = secondNode;
secondNode. next = thirdNode;